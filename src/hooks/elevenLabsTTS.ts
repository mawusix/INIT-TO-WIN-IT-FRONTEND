// WARNING: Never expose your real API key in production frontend code!
const ELEVENLABS_API_KEY = "sk_9c8440ffc5f169e96a16cff82baa9c41319294bb5ba3eaae";
const VOICE_ID = "9BWtsMINqrJLrRacOk9x"; // Example voice

export async function speakWithElevenLabs(text: string): Promise<void> {
  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/9BWtsMINqrJLrRacOk9x`,
    {
      method: "POST",
      headers: {
        "xi-api-key": ELEVENLABS_API_KEY,
        "Content-Type": "application/json",
        "Accept": "audio/mpeg",
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: { stability: 0.5, similarity_boost: 0.5 },
      }),
    }
  );

  if (!response.ok) {
    throw new Error("TTS API error");
  }

  const audioBlob = await response.blob();
  const audioUrl = URL.createObjectURL(audioBlob);
  const audio = new Audio(audioUrl);
  audio.play();
}
