const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const uri = 'mongodb://localhost:27017';
const dbName = 'portfolio';

async function seedData() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await db.collection('users').deleteMany({});
    await db.collection('users').insertOne({
      username: 'admin',
      password: hashedPassword,
      email: 'admin@portfolio.com',
      createdAt: new Date()
    });
    console.log('✓ Admin user created');

    // Seed profile
    await db.collection('profile').deleteMany({});
    await db.collection('profile').insertOne({
      name: 'Aasheesh Kumar',
      title: 'Senior Cloud Engineer',
      email: 'shrivastav.aasheesh88@gmail.com',
      phone: '+91-8218615729',
      location: 'Gurgaon, India - 122001',
      experience: '6.6+ Years',
      about: 'Experienced Cloud Engineer specializing in AWS, Azure, and GCP with expertise in DevOps, CI/CD, and Infrastructure as Code.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Python', 'Linux'],
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#',
        skype: '#'
      },
      updatedAt: new Date()
    });
    console.log('✓ Profile data seeded');

    // Seed projects
    await db.collection('projects').deleteMany({});
    await db.collection('projects').insertMany([
      {
        title: 'AWS Infrastructure Management',
        client: 'Pentagon Systems',
        duration: 'Ongoing',
        tools: 'AWS EC2, VPC, ELB, Auto Scaling, RDS, CloudWatch, IAM',
        description: 'Managing AWS cloud environments with EC2, VPC, ELB, Auto Scaling',
        image: 'assets/portfolio/micro.jpg',
        link: 'https://github.com/GoogleCloudPlatform/microservices-demo',
        order: 1,
        createdAt: new Date()
      },
      {
        title: 'AWS Backup & Security Implementation',
        client: 'Pentagon Systems',
        duration: '6 months',
        tools: 'AWS Backup, GuardDuty, CloudTrail, WAF, SNS, SES',
        description: 'Implemented AWS Backup service with vault, backup plans and policies for EC2 and other services',
        image: 'assets/portfolio/awsservices.jpg',
        link: '#',
        order: 2,
        createdAt: new Date()
      },
      {
        title: 'Cloud Migration & Optimization',
        client: 'Genpact India',
        duration: '2 years',
        tools: 'AWS VPC, EC2, S3, Route53, CloudWatch, ELB',
        description: 'Built and operated AWS Cloud environments with VPC, Subnets, Security Groups, Load Balancing',
        image: 'assets/portfolio/awsservices.jpg',
        link: '#',
        order: 3,
        createdAt: new Date()
      }
    ]);
    console.log('✓ Projects data seeded');

    // Seed experiences
    await db.collection('experiences').deleteMany({});
    await db.collection('experiences').insertMany([
      {
        title: 'Senior Cloud Engineer',
        company: 'Pentagon System & Services Pvt. Ltd.',
        period: 'May 2023 - Present',
        type: 'experience',
        description: '',
        order: 1,
        createdAt: new Date()
      },
      {
        title: 'Cloud Engineer',
        company: 'Genpact India Pvt. Ltd.',
        period: 'Jan 2021 - Dec 2022',
        type: 'experience',
        description: '',
        order: 2,
        createdAt: new Date()
      },
      {
        title: 'Cloud Support Engineer',
        company: 'Mahindra Finance Pvt. Ltd.',
        period: 'Oct 2019 - Dec 2020',
        type: 'experience',
        description: '',
        order: 3,
        createdAt: new Date()
      },
      {
        title: 'System Engineer',
        company: 'Wipro Ltd.',
        period: 'Aug 2018 - Oct 2019',
        type: 'experience',
        description: '',
        order: 4,
        createdAt: new Date()
      },
      {
        title: 'M.C.A',
        company: 'Dr.A.K.T. University (Lucknow)',
        period: '2017',
        type: 'education',
        description: '',
        order: 5,
        createdAt: new Date()
      }
    ]);
    console.log('✓ Experiences data seeded');

    console.log('\n✅ Database seeded successfully!');
    console.log('\nAdmin Credentials:');
    console.log('Username: admin');
    console.log('Password: admin123');
    console.log('\nAccess admin panel at: http://localhost:3000/admin/login');

  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await client.close();
  }
}

seedData();
