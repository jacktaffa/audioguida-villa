export default async function handler(req, res) {
    // Check for secret to confirm this is a valid request
    console.log(process.env.MY_SECRET_TOKEN);
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
      return res.status(401).json({ message: 'Invalid token' })
    }
   
    try {
      // this should be the actual path not a rewritten path
      // e.g. for "/blog/[slug]" this should be "/blog/post-1"
      console.log("################ RIVALIDO HOME")

      await res.revalidate('/')
      //await res.revalidate('/points/')
      //return res.json({ revalidated: true })
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      
      return res.status(500).send('Error revalidating:' + JSON.stringify(err))
    }
    try {
      // this should be the actual path not a rewritten path
      // e.g. for "/blog/[slug]" this should be "/blog/post-1"
      //await res.revalidate('/')
      console.log("################ RIVALIDO POINTS")
      await res.revalidate('/points')
      return res.json({ revalidated: true })
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      
      return res.status(500).send('Error revalidating:' + JSON.stringify(err))
    }
  }