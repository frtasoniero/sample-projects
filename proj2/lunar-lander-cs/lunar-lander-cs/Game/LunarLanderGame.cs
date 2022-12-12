using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using SFML.Graphics;
using SFML.System;
using SFML.Window;

namespace lunar_lander_cs
{
    public class LunarLanderGame : GameLoop
    {
        public const uint DEFAULT_WINDOW_WIDTH = 640;
        public const uint DEFAULT_WINDOW_HEIGHT = 480;
        public const String WINDOW_TITLE = "Lunar Lander";

        public LunarLanderGame() : base (DEFAULT_WINDOW_WIDTH, DEFAULT_WINDOW_HEIGHT, WINDOW_TITLE, Color.Black)
        {

        }

        public override void Draw(GameTime gameTime)
        {
            Utility.DrawPerformanceData(this, Color.Yellow);
        }

        public override void Initialize()
        {
        }

        public override void LoadContent()
        {
            Utility.LoadContent();
        }

        public override void Update(GameTime gameTime)
        {
        }
    }
}
