// components/MapEmbed.js
export const MapEmbed = () => {
  return (
    <div className="w-full h-64 md:h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.658557696135!2d85.33198547546702!3d27.69694607618861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19da3368c8d3%3A0x42c06ecd9685aa51!2sAn4Soft!5e0!3m2!1sen!2snp!4v1728299079941!5m2!1sen!2snp"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      />
    </div>
  );
};
