import React from "react";
import "./Target.scss";
import MainLayout from "../../layouts/MainLayout";
import Input from "../../components/Input";

export default function Target() {
  return (
    <MainLayout>
      <div className="container Target__wrapper">
        <h1>SET TARGET</h1>
        <small>Select your weekly target</small>
        <div className="Target">
          <div className="card">
            <div className="card-body">
              <section>
                <span>Leg Days :</span>
                <div className="Target__input">
                  <Input />
                </div>
              </section>
              <section>
                <span>Arm Days :</span>
                <div className="Target__input">
                  <Input />
                </div>
              </section>
              <section>
                <span>Chest Days </span>
                <div className="Target__input">
                  <Input />
                </div>
              </section>
            </div>
            <h4>
              Don’t forget to update about your workout .{" "}
              <button> Dashboard</button>
            </h4>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
