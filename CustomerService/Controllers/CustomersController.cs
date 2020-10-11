using Customers.BL;
using Customers.COMMON;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace CustomerService.Controllers
{
    [RoutePrefix("Customers")]
    [EnableCors(origins:"*",headers:"*",methods:"*")]
    public class CustomersController : ApiController
    {
        private readonly CustomersManager customersManager;

        public CustomersController()
        {
            customersManager = new CustomersManager();
        }

        [HttpGet]
        [Route("SearchCustomer")]
        public IHttpActionResult SearchCustomer(string filterBy,string filterValue)
        {
            try
            {
                IEnumerable<Customer> filteredList = customersManager.SearchCustomer(filterBy, filterValue);
                return Ok(filteredList);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("AddNewCustomer")]
        public IHttpActionResult AddNewCustomer([FromBody] Customer customer)
        {
            try
            {
                customersManager.AddNewCustomer(customer);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("UpdateCustomer")]
        public IHttpActionResult EditCustomer([FromBody] Customer customer)
        {
            try
            {
                customersManager.UpdateCustomer(customer);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
