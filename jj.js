const audio = document.getElementById("audioPlayer");
audio.src = config.music;
const volumeSlider = document.getElementById("volumeRange");
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});
audio.volume = volumeSlider.value;
if (!localStorage.getItem('visited')) {
  // هذه أول زيارة لهذا الزائر
  // زيادة عدد المشاهدات على السيرفر (أو حفظ في مكان مشترك)
  
  // مثال: تحديث العداد عبر API أو زيادة المتغير المحلي
  increaseViewCount(); 

  // وضع علامة أنه تم زيارة الموقع
  localStorage.setItem('visited', 'true');
}

function increaseViewCount() {
  // هنا ضع كود زيادة العداد في السيرفر أو بأي طريقة تستخدمها
  console.log('تم زيادة العداد مرة واحدة فقط لكل زائر');
}
