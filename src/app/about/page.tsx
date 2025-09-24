export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my journey, skills, and passion for creating amazing digital experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full"></div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4 text-center">Your Name</h2>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span>3+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✉️</span>
                    <span>your.email@example.com</span>
                  </div>
                </div>

                <button className="w-full mt-6 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  📄 Download Resume
                </button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">My Story</h3>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hello! I&apos;m a passionate full-stack developer with over 3 years of experience 
                    creating digital solutions that make a difference. My journey in tech started 
                    during my computer science studies, where I discovered my love for turning 
                    complex problems into elegant, user-friendly solutions.
                  </p>
                  
                  <p>
                    I specialize in modern web technologies including React, Next.js, Node.js, 
                    and TypeScript. My approach combines technical expertise with a keen eye for 
                    design, ensuring that every project I work on is not only functional but also 
                    visually appealing and intuitive to use.
                  </p>
                  
                  <p>
                    When I&apos;m not coding, you can find me exploring new technologies, contributing 
                    to open-source projects, or enjoying outdoor activities. I believe in continuous 
                    learning and am always excited to take on new challenges that push me to grow 
                    as a developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}