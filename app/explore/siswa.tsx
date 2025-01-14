import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import tw from 'twrnc';

const siswa = () => {
    return (
        <ScrollView style={tw` bg-gray-200`}>
            <View style={tw`p-5`}>
                <View style={tw`flex-row gap-3 items-center`}>
                    <Link href="/explore/project" style={tw`rounded-full py-4 px-2 w-32 border border-slate-600 `}>
                        <Text style={tw`text-center font-semibold`}>Project</Text>
                    </Link>
                    <Link href="/explore/siswa" style={tw`rounded-full py-4 px-2 w-32 bg-black text-white `}>
                        <Text style={tw`text-center font-semibold`}>Siswa</Text>
                    </Link>

                    <Link href="/(tabs)/explore" style={tw`ml-26`}>
                        <Entypo name='chevron-right' size={24}  />
                    </Link>
                </View>
                <View style={tw`my-5`}>
                    <Text style={tw`text-4xl text-slate-900 font-semibold w-5/6`}>Siswa/i Rekayasa Perangkat Lunak</Text>
                </View>
                <View style={tw`flex-row justify-center gap-3`}>
                    <View style={tw`items-center w-1/2`}>
                        <Link href="/explore/siswaDesc">
                            <Image source={require('../../assets/images/gyj.jpg')} style={tw`w-50 h-50 rounded-xl`} />
                        </Link>
                        <Text style={tw`absolute bottom-3 bg-white rounded-full text-[3.2] font-semibold w-24 py-2 text-center`}>Yoon Joung</Text>
                    </View>
                    <View style={tw`items-center w-1/2`}>
                        <Image source={require('../../assets/images/suzy.jpg')} style={tw`w-50 h-50 rounded-xl`} />
                        <Text style={tw`absolute bottom-3 bg-white rounded-full text-[3.2] font-semibold w-24 py-2 text-center`}>Bae Suzy</Text>
                    </View>
                </View>
                <View style={tw`flex-row justify-center gap-3 mt-3`}>
                    <View style={tw`items-center w-1/2`}>
                        <Image source={require('../../assets/images/cowo1.jpg')} style={tw`w-50 h-50 rounded-xl`} />
                        <Text style={tw`absolute bottom-3 bg-white rounded-full text-[3.2] font-semibold w-24 py-2 text-center`}>Dika</Text>
                    </View>
                    <View style={tw`items-center w-1/2`}>
                        <Image source={require('../../assets/images/jiwon.jpg')} style={tw`w-50 h-50 rounded-xl`} />
                        <Text style={tw`absolute bottom-3 bg-white rounded-full text-[3.2] font-semibold w-24 py-2 text-center`}>Geewonii</Text>
                    </View>
                </View>
                <View style={tw`flex-row justify-center gap-3 mt-3`}>
                    <View style={tw`items-center w-1/2`}>
                        <Image source={require('../../assets/images/peria.jpg')} style={tw`w-50 h-50 rounded-xl`} />
                        <Text style={tw`absolute bottom-3 bg-white rounded-full text-[3.2] font-semibold w-24 py-2 text-center`}>Pak Rapli</Text>
                    </View>
                    <View style={tw`items-center w-1/2`}>
                        <Image source={require('../../assets/images/pgy.jpg')} style={tw`w-50 h-50 rounded-xl`} />
                        <Text style={tw`absolute bottom-3 bg-white rounded-full text-[3.2] font-semibold w-24 py-2 text-center`}>bub</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default siswa