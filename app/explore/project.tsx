
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';

const project = () => {
    return (

        <ScrollView style={tw` bg-gray-200`}>
            <View style={tw`p-5`}>
                <View style={tw`flex-row gap-3 items-center`}>
                    <Link href="/explore/project" style={tw`rounded-full py-4 px-2 w-32 bg-black text-white `}>
                        <Text style={tw`text-center font-semibold`}>Project</Text>
                    </Link>
                    <Link href="/explore/siswa" style={tw`rounded-full py-4 px-2 w-32 border border-slate-600 `}>
                        <Text style={tw`text-center font-semibold`}>Siswa</Text>
                    </Link>
                    <Link href="/(tabs)/explore" style={tw`ml-26`}>
                        <Entypo name='chevron-right' size={24} />
                    </Link>
                </View>
                <View style={tw`my-5`}>
                    <Text style={tw`text-4xl text-slate-900 font-semibold w-5/6`}>Project Siswa/i Rekayasa Perangkat Lunak</Text>
                </View>

            </View>
            <View style={tw`bg-white w-full h-auto rounded-t-[8] p-8`}>
                <Text style={tw`text-lg font-semibold`}>Projects</Text>
                <View style={tw`gap-y-8 mt-5`}>
                    <View style={tw`w-full bg-green-500 h-60 rounded-xl overflow-hidden`}>
                        <Image source={require('../../assets/images/ui3.webp')} style={tw`w-full h-full`} />
                    </View>
                    <View style={tw`w-full bg-red-300 h-60 rounded-xl overflow-hidden`}>
                        <Image source={require('../../assets/images/ui.webp')} style={tw`w-full h-full`} />
                    </View>
                    <View style={tw`w-full bg-yellow-400 h-60 rounded-xl overflow-hidden`}>
                        <Image source={require('../../assets/images/ui2.webp')} style={tw`w-full h-full`} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default project