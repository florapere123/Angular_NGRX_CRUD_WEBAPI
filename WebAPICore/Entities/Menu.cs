using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPICore.Entities
{
    [Table("Menu", Schema = "LOOKUP")]
    public partial class Menu
    {
        public Menu()
        {
            MenuRole = new HashSet<MenuRole>();
        }

        [Key]
        public int Code { get; set; }
        [Required]
        [StringLength(50)]
        public string Description { get; set; }
        public int? Parent { get; set; }

        [InverseProperty("MenuCodeNavigation")]
        public virtual ICollection<MenuRole> MenuRole { get; set; }
    }
}
