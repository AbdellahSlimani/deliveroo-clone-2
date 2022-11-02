import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const CategoryCard = (props) => {
  return (
    <TouchableOpacity className='relative mr-2'>
      <Image source={{
        uri: urlFor(props.imgUrl).width(200).url()
      }}
        className='h-20 w-20'
      />
      <Text className='absolute bottom-1 left-1 text-white font-bold'>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard