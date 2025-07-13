using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace EmployeeApiProject.Controllers
{
    [ApiController]
    [Route("api/Emp")]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var employees = new List<string> { "Aayushi", "Abhisha", "Simran" };
            return Ok(employees);
        }
    }
}
