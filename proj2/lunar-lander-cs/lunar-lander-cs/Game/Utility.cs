using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using SFML.Graphics;
using SFML.System;

namespace lunar_lander_cs
{
    public static class Utility
    {
        public const String CONSOLE_FONT_PATH = "./font/arial.ttf";

        public static Font consoleFont;

        public static void LoadContent()
        {
            consoleFont = new Font(CONSOLE_FONT_PATH);
        }

        public static void DrawPerformanceData(GameLoop gameLoop, Color fontColor)
        {
            if (consoleFont == null) { return; }

            String totalTimeElapsed = gameLoop.GameTime.TotalTimeElapsed.ToString("0.000");
            String deltaTime = gameLoop.GameTime.DeltaTime.ToString("0.00000");
            float fps = 1f / gameLoop.GameTime.DeltaTime;
            String fpsString = fps.ToString("0.00");

            Text textTotalTime = new Text(totalTimeElapsed, consoleFont, 12);
            textTotalTime.Position = new Vector2f(4f, 8f);
            textTotalTime.Color = fontColor;

            Text textDeltaTime = new Text(deltaTime, consoleFont, 12);
            textDeltaTime.Position = new Vector2f(4f, 28f);
            textDeltaTime.Color = fontColor;

            Text textFps = new Text(fpsString, consoleFont, 12);
            textFps.Position = new Vector2f(4f, 48f);
            textFps.Color = fontColor;

            gameLoop.Window.Draw(textTotalTime);
            gameLoop.Window.Draw(textDeltaTime);
            gameLoop.Window.Draw(textFps);
        }
    }
}
