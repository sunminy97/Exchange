import { useTranslation } from 'react-i18next'

export interface MenuItem {
  label: string
  href: string
  internal?: boolean
  overflow?: boolean
  closeMenu?: () => void
}

export interface MenuSection {
  title: string
  items: MenuItem[]
  closeMenu?: () => void
}

export const useMenuContent = (): MenuSection[] => {
  const { t } = useTranslation()

  return [
    {
      title: t('common.company'),
      items: [
        { label: t('common.developers'), href: 'http://support.Anarkoswap.org' },
        // { label: t('common.blog'), href: 'https://blog.uniswap.org/' },
        { label: t('common.helpCenter'), href: '/faq' },
      ],
    },
    // {
    //   title: t('common.protocol'),
    //   items: [
    //     { label: t('common.vote'), href: 'https://vote.uniswapfoundation.org' },
    //     { label: t('common.governance'), href: 'https://uniswap.org/governance' },
    //     { label: t('common.developers'), href: 'https://uniswap.org/developers' },
    //   ],
    // },
    // {
    //   title: t('common.needHelp'),
    //   items: [
    //     { label: t('common.helpCenter'), href: 'https://support.uniswap.org/hc/en-us' },
    //     { label: t('common.contactUs.button'), href: 'https://support.uniswap.org/hc/en-us/requests/new' },
    //   ],
    // },
  ]
}
