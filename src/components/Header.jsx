import { Text, Grid, Switch, useTheme, Link } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'


export const Header = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const handleThemeChange = (e) => setTheme(e.target.checked ? 'dark' : 'light')
  return (
    <Grid.Container justify='space-between' alignItems='center' css={{px:5}}>
      <Grid css={{ display: 'flex', alignItems: 'baseline' }} >
        <Link href='/'>
          <Text span size={48}css={{ textGradient: "-85deg, $blue600 -40%, $green600 120%" }}>GIF</Text>
          <Text h1 css={{ color: "$blue600" }}>SEA</Text>
        </Link>
      </Grid>
      <Switch color="success" checked={isDark} onChange={handleThemeChange}  />
    </Grid.Container>
  )
}
