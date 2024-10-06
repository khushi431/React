// src/components/FeatureDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import "./FeaturesDetails.css"; 

const FeatureDetails = {
  feature1: {
    title: "Feature 1",
    description: "We provide excellent services that make your life easier.",
    details: [
      "24/7 Customer Support: Our dedicated team is here to help you anytime.",
      "Affordable Pricing: We offer competitive prices that fit your budget.",
      "Customizable Solutions: Tailor our services to meet your unique needs.",
    ],
  },
  feature2: {
    title: "Feature 2",
    description: "Explore our amazing blogs to get the latest insights and trends.",
    details: [
      "Industry Expert Contributions: Insights from leaders in the field.",
      "Weekly Updates: Stay informed with regular posts.",
      "In-depth Articles and Tutorials: Comprehensive guides on various topics.",
    ],
  },
  feature3: {
    title: "Feature 3",
    description: "Join our community and connect with like-minded individuals.",
    details: [
      "Networking Opportunities: Meet and collaborate with others.",
      "Online Forums: Engage in discussions on various topics.",
      "Exclusive Webinars and Events: Gain insights from industry experts.",
    ],
  },
  feature4: {
    title: "Feature 4",
    description: "Join our community and connect with like-minded individuals.",
    details: [
      "Networking Opportunities: Meet and collaborate with others.",
      "Online Forums: Engage in discussions on various topics.",
      "Exclusive Webinars and Events: Gain insights from industry experts.",
    ],
  },
  feature5: {
    title: "Feature 5",
    description: "Join our community and connect with like-minded individuals.",
    details: [
      "Networking Opportunities: Meet and collaborate with others.",
      "Online Forums: Engage in discussions on various topics.",
      "Exclusive Webinars and Events: Gain insights from industry experts.",
    ],
  },
  feature6: {
    title: "Feature 6",
    description: "Join our community and connect with like-minded individuals.",
    details: [
      "Networking Opportunities: Meet and collaborate with others.",
      "Online Forums: Engage in discussions on various topics.",
      "Exclusive Webinars and Events: Gain insights from industry experts.",
    ],
  },
  feature7: {
    title: "Feature 7",
    description: "Join our community and connect with like-minded individuals.",
    details: [
      "Networking Opportunities: Meet and collaborate with others.",
      "Online Forums: Engage in discussions on various topics.",
      "Exclusive Webinars and Events: Gain insights from industry experts.",
    ],
  },
  feature8: {
    title: "Feature 8",
    description: "Join our community and connect with like-minded individuals.",
    details: [
      "Networking Opportunities: Meet and collaborate with others.",
      "Online Forums: Engage in discussions on various topics.",
      "Exclusive Webinars and Events: Gain insights from industry experts.",
    ],
  },
  feature9: {
    title: "Feature 9",
    description: "Join our community and connect with like-minded individuals.",
    details: [
      "Networking Opportunities: Meet and collaborate with others.",
      "Online Forums: Engage in discussions on various topics.",
      "Exclusive Webinars and Events: Gain insights from industry experts.",
    ],
  },
};

const FeatureDetail = () => {
  const { featureId } = useParams();
  const feature = FeatureDetails[featureId];

  return (
    <div className="feature-detail-container">
      {feature ? (
        <>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
          <h3>Details:</h3>
          <ul>
            {feature.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Feature not found.</p>
      )}
    </div>
  );
};

export default FeatureDetail;
