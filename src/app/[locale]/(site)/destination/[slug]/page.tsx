import DESTINATIONDATA from '@/data/destinations.json';
import { notFound } from 'next/navigation';
import { createSlug } from '@/utils/slug';


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const destination = DESTINATIONDATA.find(
    item => createSlug(item.nameDestination) === params.slug
  );

  if (!destination) return {};

  return {
    title: `${destination.nameDestination} - VTravel`,
    description: destination.desDestination,
  };
}

export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  const destination = DESTINATIONDATA.find(
    item => createSlug(item.nameDestination) === params.slug
  );

  if (!destination) return notFound();

  return (
    <div className='container mx-auto py-20'>
      <h1 className='text-[35px] font-bold text-center text-blue-700 mb-6'>
        {destination.nameDestination}
      </h1>
      <img
        src={destination.imgUrl}
        alt={destination.nameDestination}
        className="w-full h-[500px] object-cover rounded-2xl mb-8"
      />
      <p className='text-[18px] leading-relaxed'>{destination.desDestination}</p>
    </div>
  );
}
