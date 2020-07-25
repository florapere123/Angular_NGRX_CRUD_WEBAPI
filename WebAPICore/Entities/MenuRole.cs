using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPICore.Entities
{
    [Table("MenuRole", Schema = "LOOKUP")]
    public partial class MenuRole
    {
        [Key]
        public int MenuCode { get; set; }
        [Key]
        public int RoleCode { get; set; }

        [ForeignKey(nameof(MenuCode))]
        [InverseProperty(nameof(Menu.MenuRole))]
        public virtual Menu MenuCodeNavigation { get; set; }
        [ForeignKey(nameof(RoleCode))]
        [InverseProperty(nameof(Role.MenuRole))]
        public virtual Role RoleCodeNavigation { get; set; }
    }
}
