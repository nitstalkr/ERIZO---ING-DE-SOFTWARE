using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ERIZO_API.Migrations
{
    /// <inheritdoc />
    public partial class inicial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Teams",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    teamName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    contestTitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    student1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    student2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    student3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    coach = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teams", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Teams");
        }
    }
}
