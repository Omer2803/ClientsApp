using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Customers.COMMON
{
    public class Customer
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [Index("IX_X_Category", 1, IsUnique = true)]
        public int Identity { get; set; }

        [Required]
        public string PhoneNumber { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateBirth { get; set; }
        public string Remarks { get; set; }
    }

    public enum FilterBy
    {
        ID,
        PhoneNumber
    }
}
