import { Button, Heading } from 'components/.'

import style from './page.module.css'


export default function Home() {
  return (
    <div className={style.wrap}>
      <Heading level='2' padded>Buttons</Heading>
      <div className={style.container}>
        <Button title='Regular button' type='regular'>
          Regular
        </Button>

        <Button title='Primary button' type='primary'>
          Primary
        </Button>

        <Button title='Button as link' type='link'>
          Link
        </Button>

        <Button icon='burger' title='Stripped button' type='stripped' />
      </div>
    </div>
  )
}
