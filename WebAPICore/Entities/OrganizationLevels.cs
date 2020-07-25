using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPICore.Entities
{
    public partial class OrganizationLevels
    {
        public OrganizationLevels()
        {
            InverseParent = new HashSet<OrganizationLevels>();
            Users = new HashSet<User>();
        }

        [Key]
        [Column("ID")]
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        [Column("ParentID")]
        public int? ParentId { get; set; }
        public bool IsRowDeleted { get; set; }

        [ForeignKey(nameof(ParentId))]
        [InverseProperty(nameof(OrganizationLevels.InverseParent))]
        public virtual OrganizationLevels Parent { get; set; }
        [InverseProperty(nameof(OrganizationLevels.Parent))]
        public virtual ICollection<OrganizationLevels> InverseParent { get; set; }
        [InverseProperty("OrganizationLevelNavigation")]
        public virtual ICollection<User> Users { get; set; }
    }
}
