using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Entities.Concrete;
using Core.Entities.Concrete;

namespace DataAccess.Concrete.EntityFramework.Contexts
{
    public class Context:DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=localhost;Database=Tasarim;Trusted_Connection=true");
        }

        public DbSet<AileHekimi> AileHekimi { get; set; }
        public DbSet<HastaIlac> HastaIlac { get; set; }
        public DbSet<Hasta> Hasta { get; set; }
        public DbSet<Ilac> Ilac { get; set; }
        public DbSet<IlacSaati> IlacSaati { get; set; }

        public DbSet<OperationClaim> OperationClaims { get; set; }

        public DbSet<UserInfo> UsersInfos { get; set; }
        public DbSet<UserPassword> UsersPasswords { get; set; }
        //public DbSet<User> Users { get; set; }
        public DbSet<UserOperationClaim> UserOperationClaims { get; set; }

    }
}
