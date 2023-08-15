import Image from 'next/image'
import styles from './page.module.css'
import { SortableTree } from '@/Tree/SortableTree'
import { TreeItem } from '@/Tree/components'
import { SortableTreeItem } from '@/Tree/components'



export default function Home() {
  return (
    <div>
      <h1>Welcome to My Drag & Drop Page</h1>
      <SortableTree />
    </div>
  )
}
