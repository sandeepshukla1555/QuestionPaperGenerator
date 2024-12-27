import { CLASS_SUBJECT } from '@/utils/data';
import { useRouter } from 'next/router';
import BookItems from '../book-items';

const BookList = () => {
  const router = useRouter();
  const { classVal }:any = router.query;
  console.log("=======:",classVal)
  const fielter=CLASS_SUBJECT.filter(((item:any)=>item.class===classVal&&item));
  console.log("Filtered data",fielter)
  
  return (<div className="flex flex-wrap gap-8 justify-center mt-2 px-4 scroll-width-none">
    {
        fielter[0]?.subject.map((item:any, i:any)=><BookItems key={i} classValue={item} title={''} image={''} color={''} pages={'book-list/chapter'}/>)
    }
    </div>)
}

export default BookList