using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using WebAPICore.API.Services;
using WebAPICore.DbContexts;
using WebAPICore.Entities;
using WebAPICore.Models.Specifications;

namespace WebAPICore.API.Services
{
    /// <summary>
    /// 
    /// </summary>
    public class RoleRepository : IRoleRepository
    {
        private readonly UsersDBContext _context;

        public RoleRepository(UsersDBContext context )
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }
        public IEnumerable<Role> GetRoles()
        {
            
            var roles = _context.Roles.ToList<Role>();
            return roles;
        }

         

       

       

   
    }
}
