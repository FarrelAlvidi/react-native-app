
import { Entypo } from '@expo/vector-icons'
import { Link } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native'
import tw from 'twrnc';

const siswaDesc = () => {
    return (
        <ScrollView style={tw`bg-gray-200 p-4`}>
            <View style={tw`flex-row gap-3`}>
                <Link href="/explore/siswa" style={tw`rounded-full justify-center bg-white/80 backdrop-blur-lg py-3 w-12 text-center items-center`}>
                <Entypo name='chevron-left' style={tw`rounded-full justify-center bg-white/80 backdrop-blur-lg py-3 w-12 text-center items-center`} size={22} />
                </Link>
                <View>
                    <Text style={tw`font-semibold text-lg`}>Go Youn-Jung</Text>
                    <Text> upsum</Text>
                </View>
            </View>
            <View style={tw `mt-8 items-center`}>
                <Image source={require('../../assets/images/gyj.jpg')} style={tw `w-full h-100 rounded-[6]`} />
                <Text style={tw `absolute -bottom-8 border border-[1] z-30 border-gray-200 w-36 font-semibold text-center py-3 bg-cyan-500 text-gray-200 rounded-full`}>Statistik</Text>
            </View>
            <View style={tw `w-full shadow shadow-blue-500 bg-white mt-3 rounded-[6] p-6 px-8 h-32 justify-center`}>
                
                <View style={tw `flex-row justify-between`}>
                    <View>
                        <Text style={tw `text-center text-gray-700 font-semibold text-lg`}>Kelas</Text>
                        <Text style={tw `text-center text-sky-600 font-semibold text-lg`}>12</Text>
                    </View>
                    <View>
                        <Text style={tw `text-center text-gray-700 font-semibold text-lg`}>Jurusan</Text>
                        <Text style={tw `text-center text-sky-600 font-semibold text-lg`}>RPL</Text>
                    </View>
                    <View>
                        <Text style={tw `text-center text-gray-700 font-semibold text-lg`}>Projek</Text>
                        <Text style={tw `text-center text-sky-600 font-semibold text-lg`}>13</Text>
                    </View>
                </View>
            </View>
            <View style={tw `w-full bg-white shadow shadow-blue-500 mt-3 rounded-[6] items-center p-6`}>
                <Text style={tw `absolute -top-8 border border-[1] border-gray-200 w-36 font-semibold text-center py-3 bg-white rounded-full`}>Tentang</Text>
                <Text style={tw `text-slate-500 text-justify`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, dicta nemo recusandae eum laboriosam aut, pariatur iste mollitia, aliquam accusamus debitis. Ex error doloribus dolorem, explicabo libero quod recusandae accusantium!</Text>
            </View>
        </ScrollView>
    )
}

export default siswaDesc