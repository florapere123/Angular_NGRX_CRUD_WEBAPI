using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPICore.Models
{
    public class UserDTO
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public int Role { get; set; }
        public string RoleDescription { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string ManagerId { get; set; }
        public int? OrganizationLevel { get; set; }
        public string Password { get; set; }
       
        public string Salt { get; set; }
        public bool IsTemporaryPassword { get; set; }
        public bool IsActive { get; set; }
        
        public DateTime CreateDate { get; set; }
     
        public DateTime LastUpdateDate { get; set; }

         
    }
}
