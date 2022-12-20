<template>
    <div class="horoscope">
        horoscope
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
export default class EveryDayHoroscope extends Vue{
    descrHoroscope = "";

    async created(): Promise<void> {
        const URLTranslate = "https://simple-elegant-translation-service.p.rapidapi.com/translate";
        const URLHoroscope = `https://aztro.sameerkumar.website?sign=cancer&day=today`;
        // fetch(URLHoroscope, {
        //     method: "POST"
        // }).then(res => res.json())
        // .then(async res => {
        //     this.descrHoroscope = await res.description
        // });
        const options = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'X-RapidAPI-Key': '828cf89fd9msh52eb72581a156c1p1478b3jsnaa7ac09d93e8',
		'X-RapidAPI-Host': 'simple-elegant-translation-service.p.rapidapi.com'
	},
	body: '{"text":"نسخ الصوت العربي يمكن لانسان اكس نسخا من نص من كلام الى نقص في جميع انواع تنسيقات الصوت والفيديو تقريبا يمكن ان يصل حجم الملف الذي تحمله الى اربعة هو لغة وبيت في الحجم او اربعة ساعات وهو ما يمثل الكثير من الملفات الصوتية والمرئية يمكنك ببساطة تحميل ملف عبر جهاز الكومبيوتر الخاص بك او يمكنك محاولة التحميل من خلال دراسة باكس او وجود الدرايف يعملوا سونيكس مع تسجيلات صوتية مفردة بالاضافة الى تسجيلات متعددة المسارات يقوم سونيكس بتجميع تسجيلات متعددة المسارات في نص واحد ويسمح بوضع العلامات التلقائية على سماعات ان استخدام التسجيلات المسارات المتعددة يساعد على تحسين الدقة بشكل كبير لأن كل مكبر صوت معزول."}'
};

fetch('https://simple-elegant-translation-service.p.rapidapi.com/translate', options)
	.then(response => response.json())
	.then(response => console.log(response))
    }
}
</script>