from fastapi import FastAPI, HTTPException, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from email.message import EmailMessage
import smtplib
import os
from dotenv import load_dotenv
from pydantic import EmailStr


app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for validation
class SocialLink(BaseModel):
    icon: str
    href: str

class HeroData(BaseModel):
    name: str
    title: str
    description: str
    typewriter_strings: List[str]
    social_links: List[SocialLink]

# Store hero data in memory (or later in DB)
hero_data = HeroData(
    name="Unique Uo",
    title="🌐 Full Stack Developer",
    description="I’m Full-Stack Developer from Benin City, Nigeria — a creator who builds solutions that move people and businesses forward.I design and develop scalable web applications, combining frontend precision with backend power.With a growing passion for AI and Machine Learning, I’m on a mission to connect innovation with human impact." ,
    typewriter_strings=[
        "I Specialize in Creating Next Solutions With software",
        "Helping Brands Grow With Strategy and Next Lvl.. data",
        "Delivering Results That Matter"
    ],
    social_links=[
        {"icon": "linkedin", "href": "https://www.linkedin.com/in/unique-uo-19b570341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"},
        {"icon": "whatsapp", "href": "/Ex_pages/Watsapp"},
        {"icon": "X", "href": "#"},
        {"icon": "minutemailer", "href": "#"}
    ]
)

# --- CRUD Endpoints ---

# Read
@app.get("/hero", response_model=HeroData)
def get_hero():
    return hero_data

# Create / Update
@app.post("/hero", response_model=HeroData)
def update_hero(data: HeroData):
    global hero_data
    hero_data = data
    return hero_data

# Delete (reset to empty/default)
@app.delete("/hero")
def delete_hero():
    global hero_data
    hero_data = HeroData(
        name="", title="", description="", typewriter_strings=[]
    )
    return {"status": "deleted in hero secton✅"}

#CRUD FOR ABOUTSECTION
# Pydantic model for validation
class AboutData(BaseModel):
    title: str
    description: str
# Store hero data in memory (or later in DB)
about_data = AboutData(
    title="About Me",
    description="The journey hasn't been easy and is not...  Yet i keep pushing Foward ! Beyond coding, I’m driven by a vision — to build digital systems that empower people and simplify the way we live and work.I believe technology should help make the world a better version of it self positively — intuitive, intelligent, and impactful.Every line of code I write is a step toward that future.",
)

#Read
@app.get("/aboutex", response_model=AboutData)
def get_aboutex():
    return about_data

# Create / Update
@app.post("/aboutex", response_model = AboutData )
def update_about(data: AboutData):
    global about_data
    about_data = data
    return about_data

#Delete
@app.delete("/aboutex", response_model=AboutData)
def delete_about():
    global about_data
    about_data = AboutData(title ="", description ="")
    return {"status": "deleted in about ✅"}

#crud for serviceex section
class ServiceexData(BaseModel):
    title1: str
    des1: str
    title2: str
    des2: str
    title3: str
    des3: str
    title4: str
    des4: str

# initial in-memory data
serviceex_data = ServiceexData(
    title1="FrontEnd Enginner",
    des1="I’m a frontend developer who turns complex ideas into elegant, high-performance digital experiences. My obsession lies at the intersection of design precision and engineering logic — where pixels meet purpose.I craft interfaces that feel alive — intuitive, responsive, and built with obsessive attention to detail. I believe good frontend isn’t just about code — it’s about empathy. Understanding how humans think, click, and feel is what shapes every component I build. ,I focus on creating experiences that users remember and recruiters can’t ignore. Let’s just say: I don’t make websites.I make interfaces that make brands look inevitable.",
    
    title2="🧠 AI & Database Engineer",
    des2="What drives me isn’t just the Knowledge — it’s the meaning. Whether it’s predictive analytics for smarter decision-making or AI models & scripts that adapt in real time, I build technology that understands before it reacts.",
    
    title3="💼Identifying opportunities, leading innovation, and ensuring success--not just in code but in every system i touch",
    des3="Never settle for less , Never get comfortable(mindset)...",
    title4="⚙️ Backend Enginner",
    des4="I specialize in building secure, scalable, and high-performance backend architectures, turning business logic into elegant systems that work. My stack includes N C#, Python, Node.js, Next.js APIs, MongoDB, PostgreSQL, and AWS, with a strong grip on authentication, microservices, and performance optimization. I design APIs that feel intuitive on the outside and bulletproof on the inside. I don’t just write server logic.I build the backbone that keeps ideas alive.",
)

@app.get("/serviceex", response_model=ServiceexData)
def get_serviceex():
    return serviceex_data

@app.post("/serviceex", response_model=ServiceexData)
def update_serviceex(data: ServiceexData):
    global serviceex_data
    serviceex_data = data
    return serviceex_data

@app.delete("/serviceex", response_model=ServiceexData)
def delete_Serviceex():
    global serviceex_data
    serviceex_data = ServiceexData(
        title1="",
        des1="",
        title2="",
        des2="",
        title3="",
        des3="",
        title4="",
        des4=""
    )
    return {"status": "deleted in service homepage ✅"}


class Skillex(BaseModel):
    head1: str
    title1: str
    title2: str
    title3: str
    title4: str
    title5: str
    title6: str
    title7: str
    title8: str
    title9: str
    title10: str
    title11: str
    title12: str
    title13: str
    title14: str
    head2: str
    skill1: str
    skill2: str
    skill3: str
    skill4: str
    percentage1: int
    percentage2: int
    percentage3: int
    percentage4: int

skillex_data = Skillex(
    head1="Tech Stack Skills",
    title1="Nextjs",
    title2="Reactjs",
    title3="Html5",
    title4="Css",
    title5="Tailwindcss",
    title6="JavaScript",
    title7="TypeScript",
    title8="Nextjs_Api",
    title9="C#",
    title10="Python",
    title11="Nodejs",
    title12="SQL/NoSQL",
    title13="Git",
    title14="Responsiveness & Ui/Ux",
    head2="Technical Skills",
    skill1="Critical Thinking",
    skill2="Problem Solving",
    skill3="Team Work",
    skill4="Results",
    percentage1=90,
    percentage2=93,
    percentage3=90,
    percentage4=100,
)

@app.get("/skillex", response_model=Skillex)
def get_skillex():
    return skillex_data

@app.post("/skillex", response_model=Skillex)
def update_skillex(data: Skillex):
    global skillex_data
    skillex_data = data
    return skillex_data

@app.delete("/skillex")
def delete_skillex():
    global skillex_data
    skillex_data = Skillex(
        head1="My Skills",
        title1="",
        title2="",
        title3="",
        title4="",
        head2="",
        skill1="",
        skill2="",
        skill3="",
        skill4="",
        percentage1=0,
        percentage2=0,
        percentage3=0,
        percentage4=0
    )
    return {"status": "deleted in home skill ✅"}
#-----------------testimonials------------------------
class TestimonyData(BaseModel):
    title: str
    comment: str
    
testimony_data = TestimonyData(
    title= "Working with You has been one of the most inspiring experiences of my career. He doesn’t just write code — he builds systems that breathe purpose. Whether it’s designing clean, intuitive UIs or architecting robust backend solutions, he approaches every project with precision, creativity, and an almost obsessive attention to detail.What truly sets him apart, though, is his mindset. He doesn’t just solve problems — he anticipates them. His ability to blend logic with innovation makes him a rare kind of developer: one who can see the bigger picture while executing flawlessly on the smallest tasks. If you’re looking for someone who turns ideas into scalable, elegant solutions — someone who leads with vision and delivers with excellence — Unique Uo is that person. ",
    comment= "I would always come work with you "
)

@app.get("/testimonialex", response_model=TestimonyData)
def get_testimonyex():
    return testimony_data

@app.post("/testimonialex", response_model=TestimonyData)
def update_testimony(data: TestimonyData):
    global testimony_data
    testimony_data = data
    return testimony_data

@app.delete("/testimonialex")
def delete_testimonyex():
    global testimony_data
    testimony_data = TestimonyData(
        title="",
        comment="",
    )
    return {"status": "deleted in home skill ✅"}


# ---------------- Team Model -----------------
class TeamMember(BaseModel):
    name: str
    role: str
    img: str

# Sample data
team_data: List[TeamMember] = [
    TeamMember(name="Jane Williams", role="Chief Operating Officer", img="/team/jane.jpg"),
    TeamMember(name="Michael Johnson", role="Head of Marketing", img="/team/michael.jpg"),
    TeamMember(name="Sarah Lee", role="Chief Financial Officer", img="/team/sarah.jpg"),
    TeamMember(name="David Brown", role="Director of Partnerships", img="/team/david.jpg"),
]

# ----------------- CRUD Routes -----------------

# Get all team members
@app.get("/teamex", response_model=List[TeamMember])
def get_team():
    return team_data

# Add a new member
@app.post("/teamex", response_model=TeamMember)
def add_team_member(member: TeamMember):
    team_data.append(member)
    return member

# Update a member by index
@app.put("/teamex/{index}", response_model=TeamMember)
def update_team_member(index: int, member: TeamMember):
    if 0 <= index < len(team_data):
        team_data[index] = member
        return member
    return {"error": "Index out of range"}

# Delete a member by index
@app.delete("/teamex/{index}")
def delete_team_member(index: int):
    if 0 <= index < len(team_data):
        removed = team_data.pop(index)
        return {"status": f"{removed.name} removed"}
    return {"error": "Index out of range"}

load_dotenv()
EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")

@app.post("/send-email")
async def send_email(
    name: str = Form(...),
    email: EmailStr = Form(...),
    message: str = Form(...),
    image: UploadFile | None = None
    ):
    try:
        msg = EmailMessage()
        msg["Subject"] = f"New Message from {name}"
        msg["From"] = "your_email@gmail.com"
        msg["To"] = "uounique251@gmail.com"
        msg.set_content(f"From: {name}\nEmail: {email}\n\nMessage:\n{message}")
        
        if image:
            img_data = await image.read()
            msg.add_attachment(img_data, maintype="image", subtype="jpeg", filename=image.filename)
            
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(EMAIL_USER, EMAIL_PASS)
            smtp.send_message(msg)
            
            return {"status": "suscess", "message": "Email sent sucessfully"}
    except Exception as e:
        return {"staus": "error", "message": str(e)}