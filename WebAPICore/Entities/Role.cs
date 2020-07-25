using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WebAPICore.Entities;

namespace WebAPICore.Entities
{
    [Table("Roles", Schema = "LOOKUP")]
    public partial class Role
    {
        public Role()
        {
            MenuRole = new HashSet<MenuRole>();
            Users = new HashSet<User>();
        }

        [Key]
        public int Code { get; set; }
        [StringLength(50)]
        public string Description { get; set; }

        [InverseProperty("RoleCodeNavigation")]
        public virtual ICollection<MenuRole> MenuRole { get; set; }
        [InverseProperty("RoleNavigation")]
        public virtual ICollection<User> Users { get; set; }
    }
}
