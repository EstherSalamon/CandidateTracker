using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RememberMes.Data;
using RememberMes.Web.Views;

namespace RememberMes.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly string _connection;

        public CandidateController(IConfiguration config)
        {
            _connection = config.GetConnectionString("ConStr");
        }

        [HttpGet("getall")]
        public List<OneMe> GetAllPeople()
        {
            MeDealings repo = new MeDealings(_connection);
            return repo.GetAll();
        }

        [HttpPost("add")]
        public void AddPerson(PersonVM vm)
        {
            vm.Person.Status = Status.Pending;
            MeDealings repo = new MeDealings(_connection);
            repo.AddMe(vm.Person);
        }

        [HttpGet("getby")]
        public List<OneMe> GetByStatus(Status status)
        {
            MeDealings repo = new MeDealings(_connection);
            return repo.GetAllByStatus(status);
        }

        [HttpGet("byid")]
        public OneMe GetById(int id)
        {
            MeDealings repo = new MeDealings(_connection);
            return repo.GetById(id);
        }

        [HttpPost("update")]
        public void UpdatePerson(OneMe me)
        {
            MeDealings repo = new MeDealings(_connection);
            repo.UpdateMe(me);
        }

        [HttpGet("count")]
        public TotalsVM GetTotalByStatus()
        {
            MeDealings repo = new MeDealings(_connection);
            TotalsVM vm = new TotalsVM
            {
                TotalConfirmed = repo.GetTotalByStatus(Status.Confirmed),
                TotalPending = repo.GetTotalByStatus(Status.Pending),
                TotalRefused = repo.GetTotalByStatus(Status.Refused)
            };
            return vm;
        }
    }
}
