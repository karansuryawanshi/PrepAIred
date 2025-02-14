# PrepAIred

PrepAIred is an AI-powered mock interview platform designed to help users practice technical and behavioral interviews. Built with Next.js, React, and Tailwind CSS, it provides interactive features like AI-driven questions, real-time responses, and feedback.

## Features

- **User Authentication** – Secure sign-in/sign-up with session management.
- **AI-Powered Interviews** – Dynamic AI-generated questions tailored to different domains.
- **Real-Time Feedback** – AI-based evaluation and feedback on responses.
- **Dashboard & Management** – Organize and track interviews efficiently.
- **Speech-to-Text Support** – Record answers with voice input.
- **Interactive UI Components** – Responsive, intuitive design with smooth animations.

## Tech Stack

- **Frontend:** Next.js, React.js, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** NextAuth.js, JWT
- **AI Integration:** Gemini AI Model
- **State Management:** Context API, Redux (if applicable)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/karansuryawanshi/prepaired.git
   ```
2. Navigate to the project directory:
   ```sh
   cd karansuryawanshi-prepaired
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Configure environment variables:
   - Create a `.env.local` file and add required API keys and database credentials.
5. Run the development server:
   ```sh
   npm run dev
   ```

## Folder Structure

```
karansuryawanshi-prepaired/
├── app/                # Next.js App Router
│   ├── auth/           # Authentication pages
│   ├── dashboard/      # User dashboard
│   ├── interview/      # Interview flow and feedback
├── components/         # Reusable UI components
├── lib/                # Utility functions
├── public/             # Static assets
├── src/                # Animations and UI effects
├── utils/              # AI model, database, and schema
```

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.
