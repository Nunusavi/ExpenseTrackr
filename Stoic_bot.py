import telegram
import openai

# Set up Telegram bot API
bot = telegram.Bot(token='5994933170:AAGS1NIH802pMdySJHEkzZ-QJzYhgvPjb9U')

# Set up OpenAI API
openai.api_key = "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"

def send_stoic_advice(chat_id):
    # Set OpenAI API parameters
    prompt = "What advice would Marcus Aurelius give on this topic?"
    model = "davinci"
    personality = "Marcus Aurelius"

    # Generate response using OpenAI API
    response = openai.Completion.create(
        engine=model,
        prompt=prompt,
        temperature=0.7,
        max_tokens=50,
        n=1,
        personality=personality
    )

    # Send response to user on Telegram
    bot.send_message(chat_id=chat_id, text=response.choices[0].text)

def handle_message(update, context):
    chat_id = update.message.chat_id
    send_stoic_advice(chat_id)

# Set up Telegram bot handlers
updater = telegram.Updater(token='5994933170:AAGS1NIH802pMdySJHEkzZ-QJzYhgvPjb9U', use_context=True)
dispatcher = updater.dispatcher
dispatcher.add_handler(telegram.MessageHandler(telegram.Filters.text, handle_message))

# Start the bot
updater.start_polling()

