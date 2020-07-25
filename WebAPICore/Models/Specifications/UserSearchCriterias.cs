using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPICore.Models.Specifications
{
    public class UserSearchCriterias
    {
        public string UserName { get; set; }
        public int? RoleId { get; set; }
        public bool IsActive { get; set; }
    }
}
