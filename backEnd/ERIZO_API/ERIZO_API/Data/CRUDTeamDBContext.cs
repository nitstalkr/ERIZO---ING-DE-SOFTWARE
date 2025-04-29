using Microsoft.EntityFrameworkCore;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace ERIZO_API.Data
{
    public class CRUDTeamDBContext(DbContextOptions<CRUDTeamDBContext> options) : DbContext(options)
    {
        public DbSet<Team> Teams => Set<Team>();


    }


}
