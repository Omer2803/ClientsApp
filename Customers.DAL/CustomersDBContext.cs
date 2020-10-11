namespace Customers.DAL
{
    using Customers.COMMON;
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class CustomersDBContext : DbContext
    {
        public CustomersDBContext()
            : base("name=CustomersDBContext")
        {
            Database.SetInitializer<CustomersDBContext>(new DropCreateDatabaseIfModelChanges<CustomersDBContext>());
        }
        public virtual DbSet<Customer> Customers { get; set; }
    }

}