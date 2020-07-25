using System;
using System.Data.Entity.ModelConfiguration.Conventions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using WebAPICore.Entities;

namespace WebAPICore.DbContexts
{
    public partial class UsersDBContext : DbContext
    {
        public UsersDBContext()
        {
        }

        public UsersDBContext(DbContextOptions<UsersDBContext> options)
            : base(options)
        {
        }

         
        public virtual DbSet<Menu> Menu { get; set; }
        public virtual DbSet<MenuRole> MenuRole { get; set; }
        public virtual DbSet<OrganizationLevels> OrganizationLevels { get; set; }
      
        public virtual DbSet<Role> Roles { get; set; }
       
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
//                optionsBuilder.UseSqlServer("Server=nesscloud.westeurope.cloudapp.azure.com,64665;Database=RecruitManagment;User ID=testuser;Password=testuser12;");
//            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            // modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            //Pluralizer pluralizer = new Pluralizer();
            //foreach (IMutableEntityType entityType in modelBuilder.Model.GetEntityTypes())
            //{
            //    string tableName = entityType.GetTableName();
            //    entityType.SetTableName(pluralizer.Pluralize(tableName));
            //}
            modelBuilder.Entity<Menu>(entity =>
            {
                entity.Property(e => e.Code).ValueGeneratedNever();
            });

            modelBuilder.Entity<MenuRole>(entity =>
            {
                entity.HasKey(e => new { e.MenuCode, e.RoleCode });

                entity.HasOne(d => d.MenuCodeNavigation)
                    .WithMany(p => p.MenuRole)
                    .HasForeignKey(d => d.MenuCode)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_MenuRole_Menu");

                entity.HasOne(d => d.RoleCodeNavigation)
                    .WithMany(p => p.MenuRole)
                    .HasForeignKey(d => d.RoleCode)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_MenuRole_Roles");
            });

            modelBuilder.Entity<OrganizationLevels>(entity =>
            {
                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.InverseParent)
                    .HasForeignKey(d => d.ParentId)
                    .HasConstraintName("FK_OrganizationLevels_OrganizationLevels");
            });

       
            modelBuilder.Entity<Role>(entity =>
            {
                entity.Property(e => e.Code).ValueGeneratedNever();
            });

         //   modelBuilder.Entity<User>().MapSingleType().ToTable("User")
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.OrganizationLevel)
                    .HasName("IX_Users");

                entity.HasOne(d => d.OrganizationLevelNavigation)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.OrganizationLevel)
                    .HasConstraintName("FK_Users_OrganizationLevels");

                entity.HasOne(d => d.RoleNavigation)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.Role)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Users_Roles");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
