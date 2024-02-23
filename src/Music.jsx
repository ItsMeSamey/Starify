function Music({ src }) {
    return (
      <div class="fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg p-8">
          <audio src={src} controls autoplay class="w-full"></audio>
        </div>
      </div>
    );
  }

export default Music