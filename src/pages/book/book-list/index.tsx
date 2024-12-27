import { CLASS_SUBJECT } from '@/utils/data';
import { useRouter } from 'next/router';
import BookItems from '../book-items';

const BookList = () => {
  const router = useRouter();
  const { classVal }:any = router.query;
  const fielter=CLASS_SUBJECT.filter(((item:any)=>item.class===classVal&&item));
  
  return (<div className="flex flex-wrap justify-center mt-2 px-4 box-border">
    {
        fielter[0]?.subject.map((item:any, i:any)=><BookItems key={i} classValue={item} title={''} image={''} color={''} pages={'book-list/chapter'}/>)
    }
    </div>)
}

export default BookList