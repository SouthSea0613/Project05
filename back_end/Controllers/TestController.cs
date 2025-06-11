using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // 주소: /api/Test
    public class TestController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetTestData()
        {
            var data = new { message = "축하합니다! ASP.NET Core에서 보낸 데이터입니다!" };
            return Ok(data);
        }
    }
}