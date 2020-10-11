using Customers.COMMON;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Customers.DAL
{
    public class CustomersDataAccess
    {
        public void AddNewCustomer(Customer customer)
        {
            using (var customersDBContext = new CustomersDBContext())
            {
                customersDBContext.Customers.Add(customer);
                customersDBContext.SaveChanges();
            }
        }

        public IEnumerable<Customer> SearchCustomer(string filterBy, string filterValue)
        {
            using (var customersDBContext = new CustomersDBContext())
            {
                if (filterBy.ToUpper() == FilterBy.ID.ToString())
                {
                    return customersDBContext.Customers.Where(c=>c.Identity.ToString().Contains(filterValue)).ToList();
                }
                return customersDBContext.Customers.Where(c => c.PhoneNumber.Contains(filterValue)).ToList();
            }
        }

        public void UpdateCustomer(Customer customer)
        {
            using (var customersDBContext = new CustomersDBContext())
            {
                var selectedCustomer = customersDBContext.Customers.FirstOrDefault(c=>c.Identity == customer.Identity);
                selectedCustomer= MapCustomer(selectedCustomer, customer);
                customersDBContext.SaveChanges();
            }
        }

        private Customer MapCustomer(Customer sourceCustomer, Customer targetCustomer)
        {
            sourceCustomer.FirstName = targetCustomer.FirstName;
            sourceCustomer.LastName = targetCustomer.LastName;
            sourceCustomer.DateBirth = targetCustomer.DateBirth;
            sourceCustomer.Remarks = targetCustomer.Remarks;
            return sourceCustomer;
        }
    }
}
