using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using react_playground_backend.Models;
using react_playground_backend.Services;

namespace react_playground_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestCollection1Controller : ControllerBase
    {
        private readonly ILogger<TestCollection1Controller> _logger;
        private readonly TestCollection1Service _testCollection1Service;

        public TestCollection1Controller(ILogger<TestCollection1Controller> logger, TestCollection1Service testCollection1Service)
        {
            _logger = logger;
            _testCollection1Service = testCollection1Service;
        }

        [HttpGet]
        public async Task<ActionResult<List<TestCollection1>>> Get() {
            return await _testCollection1Service.Get();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TestCollection1>> GetById(string id) {
            return await _testCollection1Service.GetById(id);
        }
    }
}
