import { FC, ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { NavigationGroupType } from '../Sidebar/constants'
import HashScrollContainer from './HashScrollContainer'
import Image from 'next/image'
import Link from 'next/link'

interface NavigationGroupProps {
  group: NavigationGroupType
}

const NavigationGroup: FC<NavigationGroupProps> = ({ group }) => {
  return (
    <HashScrollContainer id={group.hash}>
      <Card>
        <CardHeader>
          <CardTitle>{group.name}</CardTitle>
          {group.description && <CardDescription>Card Description</CardDescription>}
        </CardHeader>
        <CardContent className="flex gap-4 flex-wrap">
          {group.children.map((item, index) => {
            return (
              <Link href={item.link} key={item.name + index} className="w-[calc(25%-(48px/4))]">
                <Card className="card-hover h-full">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex items-center gap-4 flex-shrink-0 text-lg">
                        <div className="rounded-full relative h-12 w-12 overflow-hidden">
                          <Image src={item.icon || '/#'} alt="" fill></Image>
                        </div>
                        <p className="line-clamp-2 flex-1 ">{item.name}</p>
                      </div>
                    </CardTitle>
                    {item.description && <CardDescription className="line-clamp-4 mt-2">{item.description}</CardDescription>}
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </CardContent>
        {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
      </Card>
    </HashScrollContainer>
  )
}

export default NavigationGroup
