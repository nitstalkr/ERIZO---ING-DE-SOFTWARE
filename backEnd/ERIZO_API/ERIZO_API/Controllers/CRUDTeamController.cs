using ERIZO_API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ERIZO_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CRUDTeamController(CRUDTeamDBContext context) : ControllerBase
    { 

        private readonly CRUDTeamDBContext _context = context;



        [HttpGet] //Usamos HttpGet para indicar que se va a recuperar algo
        public async Task<ActionResult<List<Team>>> GetTeams()
        {
            return Ok(await _context.Teams.ToListAsync());
        }



        [HttpGet("{id}")] //Usamos HttpGet para indicar que se va a recuperar algo y agregamos el id que es un route
        public async Task<ActionResult<Team>> getTeamById(int id)
        {
            var act = await _context.Teams.FindAsync(id);
            if(act is null)
            {
                return NotFound();
            }
            else
            {
                return Ok(act);
            }

        }
      

        [HttpPost] //Usamos HttpPost para indicar que vamos a agregar/crear algo nuevo
        public async Task<ActionResult<Team>> addNewTeam(Team newTeam)
        {
            if(newTeam is null)
            {
                return BadRequest();
            }
            else
            {
                _context.Teams.Add(newTeam);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(getTeamById), new { id = newTeam.id }, newTeam);
            }
        }
        
        [HttpPut("{id}")] //Usamos HttpPut para indicar que vamos a modificar un objeto completo, podemos usar HttpPatch para indicar que se modifican solo ciertos parametros
        public async Task<IActionResult> updateTeam(int id, Team toUpdate)
        {
            var act = await _context.Teams.FindAsync(id);
            if (act is null)
            {
                return NotFound();
            }
            else
            {
                act.teamName = toUpdate.teamName;
                act.contestTitle = toUpdate.contestTitle;
                act.student1 = toUpdate.student1;
                act.student2 = toUpdate.student2;
                act.student3 = toUpdate.student3;
                act.coach = toUpdate.coach;

                await _context.SaveChangesAsync();

                return NoContent();
            }
        }
        

        [HttpDelete("{id}")] //Usamos HttpDelete para indicar que vamos a eliminar algo
        public async Task<IActionResult> deleteTeam(int id)
        {
            var act = await _context.Teams.FindAsync(id);
            if (act is null)
            {
                return NotFound();
            }
            else
            {
                _context.Teams.Remove(act);
                await _context.SaveChangesAsync();
                return NoContent(); 
            }
        }
        
    }
}
