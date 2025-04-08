import { Component } from '@angular/core';

interface Team {
  id: number;
  teamName: string;
  contestTitle: string;
  student1: string;
  student2: string;
  student3: string;
  coach: string;
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  teams: Team[] = [];
  currentTeam: Team = { 
    id: 0, 
    teamName: '', 
    contestTitle: '', 
    student1: '', 
    student2: '', 
    student3: '', 
    coach: '' 
  };
  nextId: number = 1;

  constructor() {
    // TODO: Inyectar un servicio aquí para manejar las peticiones al backend
    // Ejemplo: constructor(private teamService: TeamService) { this.loadTeams(); }
  }

  // Cargar equipos iniciales (simulado)
  // TODO: Reemplazar con llamada al backend
  /* 
  loadTeams(): void {
    this.teamService.getTeams().subscribe(teams => {
      this.teams = teams;
      this.nextId = Math.max(...teams.map(t => t.id)) + 1 || 1;
    });
  }
  */

  onSubmit(): void {
    if (this.currentTeam.id) {
      // Actualizar equipo existente
      const teamIndex = this.teams.findIndex(t => t.id === this.currentTeam.id);
      if (teamIndex !== -1) {
        this.teams[teamIndex] = { ...this.currentTeam };
        // TODO: Aquí iría la llamada al backend para actualizar
        // Ejemplo: this.teamService.updateTeam(this.currentTeam).subscribe();
      }
    } else {
      // Crear nuevo equipo
      this.currentTeam.id = this.nextId++;
      this.teams.push({ ...this.currentTeam });
      // TODO: Aquí iría la llamada al backend para guardar
      // Ejemplo: this.teamService.createTeam(this.currentTeam).subscribe();
    }
    this.resetForm();
  }

  editTeam(team: Team): void {
    this.currentTeam = { ...team };
  }

  deleteTeam(id: number): void {
    this.teams = this.teams.filter(team => team.id !== id);
    // TODO: Aquí iría la llamada al backend para eliminar
    // Ejemplo: this.teamService.deleteTeam(id).subscribe();
    this.resetForm();
  }

  private resetForm(): void {
    this.currentTeam = { 
      id: 0, 
      teamName: '', 
      contestTitle: '', 
      student1: '', 
      student2: '', 
      student3: '', 
      coach: '' 
    };
  }
}