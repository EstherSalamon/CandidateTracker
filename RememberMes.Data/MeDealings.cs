using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RememberMes.Data
{
    public class MeDealings
    {
        private readonly string _connectionString;

        public MeDealings(string connection)
        {
            _connectionString = connection;
        }

        public List<OneMe> GetAll()
        {
            var context = new TheMesDataContext(_connectionString);
            return context.ListOfMes.ToList();
        }

        public void AddMe(OneMe me)
        {
            var context = new TheMesDataContext(_connectionString);
            context.Add(me);
            context.SaveChanges();
        }

        public void UpdateMe(OneMe me)
        {
            var context = new TheMesDataContext(_connectionString);
            context.Update(me);
            context.SaveChanges();
        }

        public List<OneMe> GetAllByStatus(Status status)
        {
            var context = new TheMesDataContext(_connectionString);
            return context.ListOfMes.Where(m => m.Status == status).ToList();
        }

        public OneMe GetById(int id)
        {
            var context = new TheMesDataContext(_connectionString);
            return context.ListOfMes.FirstOrDefault(m => m.ID == id);
        }

        public int GetTotalByStatus(Status status)
        {
            var context = new TheMesDataContext(_connectionString);
            return context.ListOfMes.Where(m => m.Status == status).Count();
        }
    }
}
