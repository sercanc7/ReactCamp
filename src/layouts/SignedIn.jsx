import React from 'react'
import { Menu , Image, Dropdown} from 'semantic-ui-react'
export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://media.licdn.com/dms/image/D4D03AQHSxLaeYigTgA/profile-displayphoto-shrink_800_800/0/1698018539937?e=2147483647&v=beta&t=WfIFThOYYpuTCuevczwbMlZw-XQ5xr1B-NI-kqyWzf4"/>
            <Dropdown pointing="top left" text="Sercan">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>                  
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
