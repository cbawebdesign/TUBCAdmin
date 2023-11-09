import { Trans } from 'next-i18next';
import { cva } from 'cva';

import { MembershipRole } from '~/lib/organizations/types/membership-role';
import Badge from '~/core/ui/Badge';
import roles from '~/lib/organizations/roles';

const roleClassNameBuilder = cva('font-medium', {
  variants: {
    role: {
      [MembershipRole.Owner]:
        'bg-orange-100 dark:bg-orange-500/10 text-orange-700' +
        ' dark:text-orange-500',
      [MembershipRole.Admin]: 'bg-blue-50 dark:bg-blue-500/10 text-blue-500',
      [MembershipRole.Member]: 'bg-sky-50 dark:bg-sky-500/10 text-sky-500',
    },
  },
});

const RoleBadge: React.FCC<{
  role: MembershipRole;
}> = ({ role }) => {
  const data = roles.find((item) => item.value === role);
  const className = roleClassNameBuilder({ role });

  return (
    <Badge color={'custom'} size={'small'} className={className}>
      <span className={'font-semibold'} data-cy={'member-role-badge'}>
        <Trans i18nKey={data?.label} />
      </span>
    </Badge>
  );
};

export default RoleBadge;
