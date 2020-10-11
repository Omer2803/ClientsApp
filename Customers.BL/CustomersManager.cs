using Customers.COMMON;
using Customers.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Customers.BL
{
    public class CustomersManager
    {
        private readonly CustomersDataAccess customersDataAccess;

        public CustomersManager()
        {
            customersDataAccess = new CustomersDataAccess();
        }

        public void AddNewCustomer(Customer customer)
        {
            customersDataAccess.AddNewCustomer(customer);
        }

        public IEnumerable<Customer> SearchCustomer(string filterBy, string filterValue)
        {
            return customersDataAccess.SearchCustomer(filterBy, filterValue);
        }

        public void UpdateCustomer(Customer customer)
        {
            customersDataAccess.UpdateCustomer(customer);
        }
    }
}
