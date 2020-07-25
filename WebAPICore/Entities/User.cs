using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
 

namespace WebAPICore.Entities
{
    public partial class User
    {
        [Key]
        [Column("ID")]
        [StringLength(9)]
        public string Id { get; set; }
        [Required]
        [StringLength(20)]
        public string UserName { get; set; }
        public int Role { get; set; }
        [Required]
        [StringLength(50)]
        public string Email { get; set; }
        [StringLength(20)]
        public string Phone { get; set; }
        [Column("ManagerID")]
        [StringLength(9)]
        public string ManagerId { get; set; }
        public int? OrganizationLevel { get; set; }
        [Required]
        [StringLength(50)]
        public string Password { get; set; }
        [Required]
        [StringLength(50)]
        public string Salt { get; set; }
        public bool IsTemporaryPassword { get; set; }
        public bool IsActive { get; set; }
        [Column(TypeName = "date")]
        public DateTime CreateDate { get; set; }
        [Column(TypeName = "date")]
        public DateTime LastUpdateDate { get; set; }

        [ForeignKey(nameof(OrganizationLevel))]
        [InverseProperty(nameof(OrganizationLevels.Users))]
        public virtual OrganizationLevels OrganizationLevelNavigation { get; set; }
        [ForeignKey(nameof(Role))]
        [InverseProperty(nameof(Entities.Role.Users))]
        public virtual Role RoleNavigation { get; set; }
    }
}
