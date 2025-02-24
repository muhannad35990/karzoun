import { Button } from "../ui/button"

function HomeKarzounChat() {
  return (
    <div className="bg-primary flex items-center w-full px-2 py-8">
      <div className="w-5/6 mx-auto flex items-center justify-between">
        <Button className="bg-white text-primary text-lg px-8">
          {" "}
          اشترك الان
        </Button>
        <div className="flex flex-col items-end">
          <h1 className="text-3xl text-white font-bold text-end mb-2" dir="rtl">
            كرزون شات تتيح لفريقك أن يكون متعاون وأكثر إنتاجية وسرعة.
          </h1>
          <p
            className="text-lg text-gray-100 font-semibold text-right"
            dir="rtl"
          >
            ارأيت ؟… انت ونحن, موظفينك وعملائك …. الجميع سوف يكون سعيد إبدء معنا
            اليوم ثورة جديدة في تحسين خدمة العملاء لديك
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeKarzounChat
