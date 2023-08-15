import Image from 'next/image';
import styles from './page.module.css';
import { SortableTree } from '@/Tree/SortableTree';


const Wrapper = ({children}: {children: React.ReactNode}) => (
  <div
    style={{
      maxWidth: 600,
      padding: 10,
      margin: '0 auto',
      marginTop: '10%',
    }}
  >
    {children}
  </div>
);

export default function Home() {
  return (
    <Wrapper>
      <h1>Welcome to My Drag & Drop Page</h1>
      <SortableTree collapsible indicator removable />
    </Wrapper>
  );
}


// 下記はdnd-kit公式ドキュメントのExample/Tree/ AllFeaturesのコード（上記で使用）
// () => (
//   <Wrapper>
//     <SortableTree collapsible indicator removable />
//   </Wrapper>
// )